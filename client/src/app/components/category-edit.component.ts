import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { UploadService } from '../services/upload.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
    selector: 'category-edit',
    templateUrl: '../shared/layout/category-add.html',
    providers: [UserService, CategoryService, UploadService]
})

export class CategoryEditComponent implements OnInit {
    public titulo: string;
    public category: Category;
    public identity;
    public token;
    public url: string;
    public alertMessage;
    public is_edit;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _uploadService: UploadService,
        private _categoryService: CategoryService
    ){
        this.titulo = "Editar categoría";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.category = new Category('','','');
        this.is_edit = true;
    }

    ngOnInit(){
        console.log('category-edit.component.ts cargado');
        //llamar al método del api para sacar una categoría en base a su id getCategory
        this.getCategory();
    }
    getCategory(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._categoryService.getCategory(this.token, id).subscribe(
                response =>{
                    if(!response.category){
                        this._router.navigate(['/']);
                    }else{
                        this.category = response.category;
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
        console.log(this.category);
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._categoryService.editCategory(this.token, id, this.category).subscribe(
                response => {
                    if(!response.category){
                        this.alertMessage = 'Error en el servidor';
                    }else{
                        console.log('exitooo');
                        this.alertMessage = 'la categoría se ha actualizado correctamente';
                      if(!this.filesToUpload){
                        this._router.navigate(['/categoria', response.category._id]);
                      }else{
                        //SUbir la imagen de la categoría
                        this._uploadService.makeFileRequest(this.url+'upload-image-category/'+id, [], this.filesToUpload, this.token, 'image')
                            .then(
                                (result) => {
                                    this._router.navigate(['/categoria', response.category._id]);
                                },
                                (error) => {
                                    console.log(error);
                                    console.log('error en el evento');
                                }
                            );
                        //this.category = response.category;
                        //     
                        }
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
        });
    }

    public filesToUpload: Array<File>;
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}