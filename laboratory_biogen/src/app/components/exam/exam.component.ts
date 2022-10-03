import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculateService } from 'src/app/services/calculate.service';
import { BloodExam } from 'src/app/bloodexam';
import Swal, { SweetAlertIcon } from 'sweetalert2';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  examForm!: FormGroup;

  constructor( private readonly fb: FormBuilder , private readonly dataSVc : CalculateService ) { }

  ngOnInit(): void {
    this.examForm = this.initForm();
  }

  onSubmit(data : BloodExam): void{
    data.fullName= data.name+' '+data.lastname;
     this.dataSVc.postCalculateBloodExam(data).subscribe(res => {
      WritableStreamDefaultWriter
    
     
      if(res.result=="ALTO"){
        Swal.fire(
          `Riesgo ${res.result}!`,
          'El Examen a sido guardado!',
          `warning`
        )
      }else if (res.result=="MEDIO"){
        Swal.fire(
          `Riesgo ${res.result}!`,
          'El Examen a sido guardado!',
          `info`
        )
      }else{
        Swal.fire(
          `Riesgo ${res.result}!`,
          'El Examen a sido guardado!',
          `success`
        )
      }

      console.log(res)
     });
  }

  initForm():FormGroup {
    return this.fb.group({
      name :['', [Validators.required,Validators.minLength(3)]],
      lastname :['', [Validators.required,Validators.minLength(3)]],
      cc :['', [Validators.required,Validators.minLength(6)]],
      sugar :['', [Validators.required,Validators.min(0),Validators.max(100)]],
      fat :['', [Validators.required,Validators.min(0),Validators.max(100)]],
      oxygen :['', [Validators.required,Validators.min(0),Validators.max(100)]]
    })
  }
}
