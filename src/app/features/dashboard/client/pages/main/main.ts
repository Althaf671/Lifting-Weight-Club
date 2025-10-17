import { Component } from '@angular/core';
import { 
  Bell, 
  Dock, 
  Dot, 
  History, 
  LucideAngularModule, 
  Menu, 
  NotepadText,
  QrCode,
  ScanQrCode,
  SquareArrowRight
} from 'lucide-angular';

@Component({
  selector: 'app-main',
  imports: [
      LucideAngularModule,
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

    // Lucide icons
    readonly Menu = Menu;
    readonly Notification = Bell;
    readonly Dock = Dock;
    readonly HistoryIcon = History;
    readonly NotepadText = NotepadText;
    readonly Dot = Dot;
    readonly QrCode = ScanQrCode;
    readonly ChangePlan = SquareArrowRight;
}
