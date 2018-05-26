import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import{ GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { Service } from '../models/service';
import { ServiceService } from '../services/service.service';

//declaracion para usar jquery
declare var $:any;

@Component({
    selector: 'informacion-edit',
    templateUrl: '../shared/layout/informacion-edit.html',
    providers: [UserService, CategoryService, ServiceService]
})

export class InformacionEditComponent implements OnInit{
    public titulo: string;
    public categories: Category[];
    public services: Service[];
    public user: User;
    public identity;
    public token;
    public alertMessage;
    public url:string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _categoryService: CategoryService,
        private _serviceService: ServiceService
    ){
        this.titulo = 'Información de perfil';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
        
    }

    ngOnInit(){
        console.log('informacion-edit.component.ts cargado');
        this.getCategories();
        this.getService();
        this.checkbox();
       // $.getScript('../../assets/js/main.js');
       $( document ).ready(function() {
        $('input[type="checkbox"]').on('click', checkbox);
        checkbox();
        function checkbox(){
          if ($('#ofrezcoservicio').is(':checked')){
                 $('#ofrezcoservicioSeccion').show();
              }else{
                $('#ofrezcoservicioSeccion').hide();
              }
        }
      });
      
    }
    checkbox(){
        if (this.user.servicio){
               $('#ofrezcoservicioSeccion').show();
            }else{
              $('#ofrezcoservicioSeccion').hide();
            }
     
      }
      
    getCategories(){
        this._route.params.forEach((params: Params) =>{
            let page = +params['page'];
            if(!page){
                page = 1;
            }
            this._categoryService.getCategories(this.token, page).subscribe(
                response =>{
                    if(!response.categories){
                        this._router.navigate(['/']);
                    }else{
                        this.categories = response.categories;
                    }
                },
                error => {
                    var errorMessage = <any>error;
        
                    if(errorMessage != null){
                      var errorbody = JSON.parse(error._body);
                     //this.alertMessage = errorbody.message;
                      console.log(error);
                    }
                }
            );
        });
    }
    getService(){
        this._route.params.forEach((params: Params) =>{
            let page = +params['page'];
            if(!page){
                page = 1;
            }
            this._categoryService.getCategories(this.token, page).subscribe(
                response =>{
                    if(!response.categories){
                        this._router.navigate(['/']);
                    }else{
                        this.categories = response.categories;
                    }
                },
                error => {
                    var errorMessage = <any>error;
        
                    if(errorMessage != null){
                      var errorbody = JSON.parse(error._body);
                     //this.alertMessage = errorbody.message;
                      console.log(error);
                    }
                }
            );
        });
    }
    onSubmit(){
        console.log(this.user);
        this._userService.updateUser(this.user).subscribe(
            response => {
                if(!response.user){
                    this.alertMessage = "El usuario no se ha actualizado";
                }else{
                    //this.user = response.user;
                    localStorage.setItem('identity', JSON.stringify(this.user));
                    $('#nombre-usuario').text(this.user.name);
                    if(!this.filesToUpload){
                        //redirección
                        }else{
                            this.makeFileRequest(this.url+'upload-image-user/'+this.user._id, [], this.filesToUpload).then(
                                (result: any) => {
                                    this.user.image = result.image;
                                    localStorage.setItem('identity', JSON.stringify(this.user));
                                    
                                    let image_path = this.url + 'get-image-user/' + this.user.image;
                                    $('.imagen-perfil-menu').find('img').attr('src', image_path);
                                }
                            )
                        }
                    this.alertMessage = "Los datos han sido atualizados correctamente";
                }
            },
            error => {
                var errorMessage = <any>error;
      
                if(errorMessage != null){
                  var errorbody = JSON.parse(error._body);
                  this.alertMessage = errorbody.message;
                  console.log(error);
                }
             }
        );
    }
    public filesToUpload: Array<File>;
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
    makeFileRequest(url: string, params: Array<string>, files: Array<File>){
        var token = this.token;
        return new Promise(function(resolve, reject){
            var formData:any = new FormData();
            var xhr = new XMLHttpRequest();

            for(var i = 0; i < files.length; i++){
                formData.append('image', files[i], files[i].name);
            }
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.response)
                    }
                }
            }
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    }
}