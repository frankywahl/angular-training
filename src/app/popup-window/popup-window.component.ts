import {Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupWindowComponent implements OnInit {

  @Input()
  isOpen = false;

  @Input()
  title = "Title";

  @Output()
  onClose = new EventEmitter<string>();

  ngOnInit() {
    console.log('NG ON INIT');
  }

  closePopup() {
    this.isOpen = false;
    this.onClose.emit('Pop-up window closed');
  }
}
