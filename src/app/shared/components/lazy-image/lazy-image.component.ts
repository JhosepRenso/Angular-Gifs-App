import { Component, Input } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {
  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  public HasLoader: boolean = false;

  ngOnInit():void{
    if ( !this.url ) throw new Error('URL property is requerid')
  }

  onLoad(){
    console.log('Image loader');
    this.HasLoader = true;
  }

}
