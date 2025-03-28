import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonacoLoaderService {

  private isMonacoLoaded = false;

  constructor() {}

  loadMonaco(): Promise<void> {
    if (this.isMonacoLoaded) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      const monacoScript = document.createElement('script');
      monacoScript.src = 'assets/monaco-editor/min/vs/loader.js';
      monacoScript.onload = () => {
        (window as any).require.config({ paths: { vs: 'assets/monaco-editor/min/vs' } });
        (window as any).require(['vs/editor/editor.main'], () => {
          this.isMonacoLoaded = true;
          resolve();
        });
      };
      document.body.appendChild(monacoScript);
    });
  }
  
}
