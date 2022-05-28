import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SavingsRestapiService } from '../../../services/savings-restapi.service';

@Component({
  selector: 'app-add-edit-savings',
  templateUrl: './add-edit-savings.component.html',
  styleUrls: ['./add-edit-savings.component.scss']
})
export class AddEditSavingsComponent implements OnInit {

  savingList$!: Observable<any[]>;
  savingstatusList$!: Observable<any[]>;
  savingTypesList$!: Observable<any[]>;

  constructor(private service: SavingsRestapiService) { }

  @Input() saving:any;
  id: number = 0;
  savingstatus: string = "";
  comments: string = "";
  amount: string = "";
  savingTypeId!: number;

  ngOnInit(): void {
    this.id = this.saving.id;
    this.savingstatus = this.saving.savingstatus;
    this.comments = this.saving.comments;
    this.amount = this.saving.amount;
    this.savingTypeId = this.saving.savingTypeId;
    this.savingstatusList$ = this.service.getSavingStatusList();
    this.savingList$ = this.service.getSavingList();
    this.savingTypesList$ = this.service.getSavingTypesList();
  }
  addSaving() {
    var saving = {
      savingstatus:this.savingstatus,
      comments:this.comments,
      amount:this.amount,
      savingTypeId:this.savingTypeId
    }
    this.service.addSaving(saving).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

  updateSaving() {
    var saving = {
      id: this.id,
      savingstatus:this.savingstatus,
      comments:this.comments,
      amount:this.amount,
      savingTypeId:this.savingTypeId
    }
    var id:number = this.id;
    this.service.updateSaving(id,saving).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

}
