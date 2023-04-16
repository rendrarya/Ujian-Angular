import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  nama: string = 'I Gusti Arya Sidhi Narendra';
  nim: string = '42030044';
  prodi: string = 'Teknologi Informasi';
  isinama: string = '';
  isinim: string = '';
  isiprodi: string = '';

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not');
  }

  onRata() {
    this.nama = this.isinama
    this.nim = this.isinim
    this.prodi = this.isiprodi
  }
}
