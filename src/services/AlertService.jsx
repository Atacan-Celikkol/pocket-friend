import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const swal = withReactContent(Swal);

export function ShowDeleteConfirmation() {
   return swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      animation: false,
      confirmButtonText: 'Delete!',
      confirmButtonColor: '#F33',
      toast: true,
      width: 350,
      showCloseButton: true,
   });
}
export function ShowDeleteSuccess() {
   return swal.fire({
      title: 'Deleted!',
      text: 'Item has been deleted!',
      icon: 'success',
      position: "bottom",
      showConfirmButton: false,
      toast: true,
      timer: 2500,
      width: 350
   });
}

export function ShowQueue(progressSteps, queueItems) {
   return swal.mixin({
      animation: false,
      confirmButtonText: 'Next',
      confirmButtonColor: '#07f',
      showCancelButton: true,
      cancelButtonColor: '#F33',
      progressSteps
   }).queue(queueItems);
}