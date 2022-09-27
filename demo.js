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

const restoreConfirm = document.getElementById('restore-confirm-btn');
const restoreForm = document.forms['restore-course-form'];
const restoreBtns = Array.from(document.getElementsByClassName('btn-restore'));
let courseId;

for (const restoreBtn of restoreBtns) {
    restoreBtn.onclick = function (e) {
        courseId = e.target.dataset.id;
        restoreConfirm.onclick = function (e) {
            restoreForm.action = `/courses/${courseId}/restore?_method=PATCH`;
            restoreForm.submit();
        };
    };
}
