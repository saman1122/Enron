import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(text: string, search: string): SafeHtml {
    if (search && text) {
      let pattern = search.toString().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      pattern = pattern.split(' ').filter((t) => {
        return t.length > 0;
      }).join('|');
      const regex = new RegExp(pattern, 'gi');
      return this.sanitizer.bypassSecurityTrustHtml(
        text.toString().replace(regex, (match) => `<span class="search-highlight">${match}</span>`)
      );

    } else {
      return text;
    }
  }

}
