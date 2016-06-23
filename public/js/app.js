$('#addReview').submit(function (e) {
  $('.alert.alert-danger').hide()
  if (!$('input#name').val() || !$('select#rating').val() || !$('textarea#review').val()) {
    if ($('.alert.alert-danger').length) {
      $('.alert.alert-danger').show()
    } else {
      $(this).prepend('<div role="alert" class="alert alert-danger">All fields required. Validated by jQuery</div>')
    }
    return false
  }
})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoJyNhZGRSZXZpZXcnKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcbiAgJCgnLmFsZXJ0LmFsZXJ0LWRhbmdlcicpLmhpZGUoKVxuICBpZiAoISQoJ2lucHV0I25hbWUnKS52YWwoKSB8fCAhJCgnc2VsZWN0I3JhdGluZycpLnZhbCgpIHx8ICEkKCd0ZXh0YXJlYSNyZXZpZXcnKS52YWwoKSkge1xuICAgIGlmICgkKCcuYWxlcnQuYWxlcnQtZGFuZ2VyJykubGVuZ3RoKSB7XG4gICAgICAkKCcuYWxlcnQuYWxlcnQtZGFuZ2VyJykuc2hvdygpXG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykucHJlcGVuZCgnPGRpdiByb2xlPVwiYWxlcnRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPkFsbCBmaWVsZHMgcmVxdWlyZWQuIFZhbGlkYXRlZCBieSBqUXVlcnk8L2Rpdj4nKVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
