// var abj = 'abcdefghijaosjdlkadjlaksdjlaksdjlasdj a;sjdalksdjaklsdj lasjdlkasdjklasdjaskldjalsdkjskdjkkkkkkkkklmnopqrs';

// // cari berapa kata huruf k, munculkan angkanya

// console.log(abj.indexOf("k"));

// var str = 'abcdefghijaosjdlkadjlaksdjlaksdjlasdj a;sjdalksdjaklsdj lasjdlkasdjklasdjaskldjalsdkjskdjkkkkkkkkklmnopqrs';
// var new = 'gi'

// function count(string,char) {
//   return string.match(new).length;
//  }
 
//  console.log(count(str,'k'));

// var str = 'abcdefghijaosjdlkadjlaksdjlaksdjlasdj a;sjdalksdjaklsdj lasjdlkasdjklasdjaskldjalsdkjskdjkkkkkkkkklmnopqrs';
//  function count(string,char) {
//   var re = new RegExp(char,"gi");
//   return string.match(re).length;
//  }
 
//  console.log(count(str,'k'))

var abj = 'abcdefghijaosjdlkadjlaksdjlaksdjlasdj a;sjdalksdjaklsdj lasjdlkasdjklasdjaskldjalsdkjskdjkkkkkkkkklmnopqrs'
var num = (abj.match(/k/g) || []).length;
if(num == 0) {
    console.log('nothing k');
} 
else {
    console.log('Jumlah huruf k : ' + num);
}