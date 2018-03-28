/*
 * The MIT License
 *
 * Copyright 2016 Thibault Debatty.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package com.saman.demoSpringAngular.enron;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Stack;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Stream;

/**
 * @author Thibault Debatty
 */
public class Dataset extends DatasetAbstract<EmailDataset> {

    private final String directory;

    public Dataset(String directory) {
        this.directory = directory;

    }

    public Iterator<EmailDataset> iterator() {
        return new EnronIterator(directory);
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 89 * hash + (this.directory != null ? this.directory.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Dataset other = (Dataset) obj;
        return (this.directory == null) ? (other.directory == null) : this.directory.equals(other.directory);
    }


    private static class EnronIterator implements Iterator<EmailDataset> {

        private static final int BUFFER_SIZE = 10;

        /**
         * List of folders that can be processed to extract pages. Implemented
         * as a stack to get depth first search processing...
         */
        private final Stack<File> directories = new Stack<>();

        private final LinkedList<EmailDataset> available_emails = new LinkedList<>();
        private final LinkedList<File> available_files = new LinkedList<>();
        private final String root;


        public EnronIterator(String directory) {
            root = directory;
            directories.push(new File(directory));

            // Fill the files buffer
            readNextFiles();

            // Fill the pages buffer
            readNextPages();
        }

        public boolean hasNext() {
            return !available_emails.isEmpty();
        }

        public EmailDataset next() {
            EmailDataset current = available_emails.removeFirst();
            if (available_emails.isEmpty()) {
                readNextPages();
            }

            return current;
        }

        public void remove() {
            throw new UnsupportedOperationException("Not supported!");
        }

        private void readNextPages() {

            while (available_emails.size() < BUFFER_SIZE) {
                if (available_files.isEmpty()) {
                    return;
                }

                File next_file = available_files.poll();
                try {
                    available_emails.add(
                            new EmailDataset(
                                    readFile(next_file.toPath()),
                                    next_file.getParent().substring(root.length() + 1)));

                } catch (Exception ex) {
                    Logger.getLogger(Dataset.class.getName()).log(Level.SEVERE, null, ex);
                }

                if (available_files.isEmpty()) {
                    readNextFiles();
                }
            }
        }

        private String readFile(final Path file) throws IOException {
            StringBuilder string_builder = new StringBuilder();
            String ls = System.getProperty("line.separator");

            try (Stream<String> stream = Files.lines(file)) {
                stream.forEach(line -> {
                    string_builder.append(line);
                    string_builder.append(ls);
                });

                return string_builder.toString();
            }
        }

        private void readNextFiles() {

            while (available_files.isEmpty()) {
                if (directories.empty()) {
                    return;
                }

                File current_folder = directories.pop();
                File[] files = current_folder.listFiles();
                if (files != null) {
                    for (File file : files) {
                        if (file.isDirectory()) {
                            directories.push(file);
                        } else {
                            available_files.add(file);
                        }
                    }
                }
            }
        }
    }
}
