import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SavingsRestapiService } from '../../../services/savings-restapi.service';

@Component({
  selector: 'app-show-savings',
  templateUrl: './show-savings.component.html',
  styleUrls: ['./show-savings.component.scss']
})
export class ShowSavingsComponent implements OnInit {
  savingList$!: Observable<any[]>;
  savingTypesList$!: Observable<any[]>;
  savingTypesList: any = [];

  // Map to display data associate with foreign keys
  savingTypesMap: Map<number, string> = new Map()

  constructor(private service: SavingsRestapiService) { }

  ngOnInit(): void {
    this.savingList$ = this.service.getSavingList();
    this.savingTypesList$ = this.service.getSavingTypesList();
    this.refreshSavingTypesMap();
  }
  // refreshSavingTypesMap() {
  //   this.service.getSavingTypesList().subscribe(data => {
  //     this.savingTypesList = data;

  //     for (let i = 0; i < data.length; i++) {
  //       this.savingTypesMap.set(this.savingTypesList[i].id, this.savingTypesList[i].savingName);
  //     }
  //   })
  // };

  // Variables (properties)
  modalTitle: string = '';
  activateAddEditSavingComponent: boolean = false;
  saving: any;

  modalAdd() {
    this.saving = {
      id: 0,
      status: null,
      comments: null,
      amount: null,
      savingTypeId: null
    }
    this.modalTitle = "Add Saving";
    this.activateAddEditSavingComponent = true;
  }
  modalEdit(item: any) {
    this.saving = item;
    this.modalTitle = "Edit Saving";
    this.activateAddEditSavingComponent = true;
  }

  delete(item: any) {
    if (confirm(`Are you sure you want to delete thiis saving goal ${item.id}`)) {
      this.service.deleteSaving(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if (closeModalBtn) {
          closeModalBtn.click();
        }

        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function () {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = "none"
          }
        }, 4000);
        this.savingList$ = this.service.getSavingList();
      })
    }
  }

  modalClose() {
    this.activateAddEditSavingComponent = false;
    this.savingList$ = this.service.getSavingList();
  }

  refreshSavingTypesMap() {
    this.service.getSavingTypesList().subscribe(data => {
      this.savingTypesList = data;

      for (let i = 0; i < data.length; i++) {
        this.savingTypesMap.set(this.savingTypesList[i].id, this.savingTypesList[i].savingName);
      }
    })
  }

}
