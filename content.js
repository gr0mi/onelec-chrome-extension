// content.js
$(function(){
	$(document).on('ready', ()=>{
		$('.mail-Layout-Inner').append('<div id="main-Layout-Custom" class="mail-Layout-Main js-mail-layout-content">\n' +
			'    <div class="mail-Layout-Content">\n' +
			'        <div class="ns-view-toolbar-box ns-view-id-40" data-key="box=toolbar-box">\n' +
			'            <div class="ns-view-toolbar ns-view-id-191 mail-Toolbar mail-Toolbar_messages js-toolbar-wrap"\n' +
			'                 data-key="view=toolbar&amp;layout=messages">\n' +
			'                <div class="mail-Toolbar-Content js-toolbar-content js-toolbar">\n' +
			'                    <div class="mail-Toolbar-Background"></div>\n' +
			'                    <div class="ns-view-toolbar-buttons-box ns-view-id-192 mail-Toolbar-Section mail-Toolbar-Section_main js-toolbar-chevron"\n' +
			'                         data-key="box=toolbar-buttons-box">\n' +
			'                        <div class="ns-view-toolbar-buttons ns-view-id-194"\n' +
			'                             data-key="view=toolbar-buttons&amp;threaded=yes&amp;current_folder=1&amp;sort_type=date&amp;with_pins=yes&amp;layout=messages">\n' +
			'                            <div class="ns-view-container-desc">\n' +
			'                               <div class="ns-view-id-198 js-toolbar-button mail-Toolbar-Item mail-Toolbar-Item_forward is-disabled js-toolbar-item-forward js-toolbar-item"\n' +
			'                                     data-key="view=toolbar-button-forward&amp;threaded=yes&amp;current_folder=1&amp;sort_type=date&amp;with_pins=yes&amp;layout=messages&amp;id=forward"\n' +
			'                                     data-params="source=toolbar" title=""><span class="mail-ui-Icon"><svg\n' +
			'                                                xmlns="http://www.w3.org/2000/svg"\n' +
			'                                                class="svgicon svgicon-mail--MainToolbar-Forward"><use\n' +
			'                                                    xlink:href="#svgicon-mail--MainToolbar-Forward"></use><rect\n' +
			'                                                    height="100%" width="100%" style="fill: transparent;"></rect></svg></span><span\n' +
			'                                            class="mail-Toolbar-Item-Text js-toolbar-item-title js-toolbar-item-title-forward">ONELEC</span>\n' +
			'                                </div>\n' +
			'                            </div>\n' +
			'                        </div>\n' +
			'                    </div>\n' +
			'                </div>\n' +
			'            </div>\n' +
			'        </div>\n' +
			'    </div>\n' +
			'</div>');
		// $('.js-messages-item','.mail-MessagesList').each((i,v)=>{
		// 	$('.mail-MessageSnippet-Content', v).append();
		// });
	});
});