<ul class="clearfix">
    {{if prev_page}}<li class="prev_pagination"><a href="javascript:;"><i class="ico-arrow-left4"></i></a></li>{{/if}}
    {{each pageList as page index}}<li  class="detailPage {{if page.active}}active{{/if}}"><a href="javascript:;" data-page="{{page.number}}">{{page.number}}</a></li>{{/each}}
    {{if next_page}}<li class="next_pagination"><a href="javascript:;"><i class="ico-arrow-right4"></i></a></li>{{/if}}
</ul>