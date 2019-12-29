import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const swal = withReactContent(Swal);

export function ShowDeleteConfirmation() {
   return swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes!'
   });
}
export function ShowDeleteSuccess() {
   return swal.fire(
      'Deleted!',
      'Item has been deleted.',
      'success'
   );
}

export function ShowQueue(progressSteps, queueItems) {
   return swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps
   }).queue(queueItems);
}