import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter=signal(0);
  counterRef:number|undefined;

  @Input ({required:true}) duration:number=0;
  @Input ({required:true}) message:string='';
  num=signal(0);
  changrNum(){
    console.log('change num')
  }
  constructor(){
    console.log('constructor');
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes:SimpleChanges){

    console.log('Onchanges');
    console.log("-c".repeat(10))
    console.log(changes)
    const duration=changes['duration']; 
    if (duration && duration.currentValue!==duration.previousValue) {
      this.doSomething()
    }
  
  }

  ngOnInit(){
    console.log('ngOnInit');
    console.log('-i'.repeat(10));
    console.log('duration->'+this.duration)
    console.log('message->'+this.message)

    this.counterRef= window.setInterval(()=>{
      console.log('run interval')
      this.counter.update(stateprev=>stateprev+1);
    },1000)

  }

  ngAfterViewInit(){
    console.log('ngAfterviewInit');
    console.log('-a'.repeat(10));

  }

  ngOnDestroy(){
    console.log('ngDestroit');
    console.log('-d'.repeat(10));
   
  }

  doSomething(){
    console.log('cambio detectado');
  }
}
