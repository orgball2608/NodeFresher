function demo() {
    document.addEventListener('DOMContentLoaded', function () {
        $('#delete-course-modal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget);
            var id = button.data('id');
            console.log(id);
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var courseId;
    var deleteForm = document.forms['delete-course-form'];
    var btnDeleteCourse = document.getElementById('delete-course-btn');

    $('#delete-course-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        courseId = button.data('id');
        console.log(courseId);
    });

    btnDeleteCourse.onclick = function () {
        alert(courseId);
        deleteForm.action = '/courses/' + courseId + '?_method=DELETE';
        deleteForm.submit();
    };
});

const deleteBtns = Array.from(document.getElementsByClassName('delete-btn'));
const deleteConfirm = document.getElementById('delete-confirm-btn');
const deleteForm = document.forms['delete-course-form'];
console.log(deleteConfirm);
let courseId;
for (const deleteBtn of deleteBtns) {
    deleteBtn.onclick = function (e) {
        courseId = e.target.dataset.id;
        deleteConfirm.onclick = function (e) {
            deleteForm.action = `/courses/${courseId}?_method=DELETE`;
            deleteForm.submit();
        };
    };
}
