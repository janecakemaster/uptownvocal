window.onload = ->
  nsqWidth = jQuery('.nr_inner').width()
  thumbWidth = jQuery('a.ng-scope').innerWidth()
  thumbsFit = Math.floor nsqWidth / thumbWidth
  resizeDiv = thumbWidth * thumbsFit
  jQuery('.nr_inner').css 'padding-left', (nsqWidth - resizeDiv)/2
  jQuery('.nr_inner').css 'margin', '0 auto'
  jQuery('.entry-title').css 'padding-left', ((nsqWidth - resizeDiv)/2)-5
  # jQuery('.btn-toolbar').css 'padding-left', ((nsqWidth - resizeDiv)/2)-5
  return
jQuery(window).resize ->
  nsqWidth = jQuery('.nr_inner').width()
  thumbWidth = jQuery('a.ng-scope').innerWidth()
  thumbsFit = Math.floor nsqWidth / thumbWidth
  resizeDiv = thumbWidth * thumbsFit
  jQuery('.nr_inner').css 'padding-left', (nsqWidth - resizeDiv)/2
  jQuery('.nr_inner').css 'margin', '0 auto'
  jQuery('.entry-title').css 'padding-left', ((nsqWidth - resizeDiv)/2)-5
  # jQuery('.btn-toolbar').css 'padding-left', ((nsqWidth - resizeDiv)/2)-5
  return