import {Component, OnDestroy, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd/message";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeductionService} from "../../../@core/services/deduction.service";
import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";

@Component({
  selector: 'app-interactive-deduction',
  templateUrl: './interactive-deduction.component.html',
  styleUrls: ['./interactive-deduction.component.less']
})
export class InteractiveDeductionComponent implements OnInit, OnDestroy {

  isCreateDeductionGroupModalVisible = false;

  validateCreateDeductionGroupForm: FormGroup;

  stompClient: any;
  serverUrl = "http://localhost:9800/api/portal/interactiveDeductionServer"

  constructor(private deductionService: DeductionService, private message: NzMessageService, private formBuilder: FormBuilder) {
    this.validateCreateDeductionGroupForm = this.formBuilder.group({
      theme: ['', [Validators.required]],
      type: ['', [Validators.required]],
      intervenedLevel: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  connect(deductionGroupCode: string): void {
    let webSocket = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(webSocket);
    this.stompClient.heartbeat.outgoing = 20000;
    this.stompClient.heartbeat.incoming = 0;
    this.stompClient.connect({}, (frame: any) => {
      this.subscribe(deductionGroupCode);
    });
  }

  disconnect(): void {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
  }

  subscribe(deductionGroupCode: string): void {
    let subscribeUrl = `/interactiveDeduction/${deductionGroupCode}`;
    this.stompClient.subscribe(subscribeUrl, (message: any) => {
      if (message.body) {
        console.log(message.body);
      }
    });
  }

  sendIntervention(): void {
    this.stompClient.send("/intervention", {}, JSON.stringify({'content': "111"}));
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

  createDeductionGroup(): void {
    this.message.info("创建推演群组");
    this.isCreateDeductionGroupModalVisible = true;
  }

  handleCancelCreateDeductionGroup(): void {
    this.isCreateDeductionGroupModalVisible = false;
  }

  handleConfirmCreateDeductionGroup(): void {
    console.log(this.validateCreateDeductionGroupForm.value);
    this.deductionService.createDeductionGroup(this.validateCreateDeductionGroupForm.value).subscribe(data => {
      this.connect(data.data.code as string);
    });
  }

  submitCreateDeductionGroupForm(): void {

  }

  resetCreateDeductionGroupForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateCreateDeductionGroupForm.reset();
    for (const key in this.validateCreateDeductionGroupForm.controls) {
      if (this.validateCreateDeductionGroupForm.controls.hasOwnProperty(key)) {
        this.validateCreateDeductionGroupForm.controls[key].markAsPristine();
        this.validateCreateDeductionGroupForm.controls[key].updateValueAndValidity();
      }
    }
  }
}
