$(document).ready(function () {
        $('#myModal').on('show.bs.modal', function (e) {
            var image = $(e.relatedTarget).attr('src');
            var caption = $(e.relatedTarget).attr('alt');
            $(".img-responsive").attr("src", image);
            $("#modal-caption").html(caption);
        });
});