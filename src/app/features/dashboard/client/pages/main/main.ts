import { Component } from '@angular/core';
import { Bell, ChartColumnBig, Dock, History, LucideAngularModule, Menu, NotepadText } from 'lucide-angular';
import { ScrollText } from 'lucide-angular/src/icons';

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
}
