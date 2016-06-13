var UploadPhotoItem = (function(){

    function UploadPhotoItem(uploadPhotoFile){
        this.file = uploadPhotoFile;
        this.thumbnailBase64Url = undefined;
    }

    UploadPhotoItem.prototype.getThumbnailBase64Url = function(callback){
        var self = this;
        if(this.thumbnailBase64Url){
            if(callback) callback(this.thumbnailBase64Url);
        } else {
            var reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = function(e) {
                self.thumbnailBase64Url = e.target.result;
                if(callback) callback(self.thumbnailBase64Url);
            };
        }
    };

    return UploadPhotoItem;

})();