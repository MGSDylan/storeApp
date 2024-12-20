import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { WaveAudioComponent } from "../../components/wave-audio/wave-audio.component";
import { HighlightDirective } from '@shared/directives/highlight.directive';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, CommonModule, WaveAudioComponent,HighlightDirective,HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  duration=signal(1000);
  message=signal('hay alguien hay con vida');

  
  
  changeDuration(event:Event){
    const input =event.target as HTMLInputElement;
    this.duration.set(Number.parseInt(input.value));
  }

  changeMessage(event:Event){
    const input =event.target as HTMLInputElement;
    this.message.set(input.value);
  }

}
