import { Subject } from 'rxjs';

var subject = new Subject();

subject.subscribe(
    (data: any) => addItem('Observer 1: ' +data),
    err => addItem(err),
    () => addItem('Observer 1 Completed') 
)

subject.next('The first thing has been sent')
subject.next('The second thing has been sent')
subject.next('The third thing has been sent')

var observer2 = subject.subscribe(
    (data: any) => addItem('Observer 2: ' +data),
)

subject.next('The fourth thing has been sent')
subject.next('The fifth thing has been sent')
subject.next('The sixth thing has been sent')

observer2.unsubscribe();
subject.next('The seventh thing has been sent')
subject.next('The eigth thing has been sent')


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
