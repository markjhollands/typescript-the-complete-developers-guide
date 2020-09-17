import fs from 'fs';
import { IOutputTarget } from '../IOutputTarget';

export class HtmlReport implements IOutputTarget {
  constructor(public reportFilename: string) { }

  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync(this.reportFilename, html);
  }
}