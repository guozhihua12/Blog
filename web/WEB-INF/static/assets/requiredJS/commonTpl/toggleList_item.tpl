<div class="enar_occ_container" data-expanded="false">
    <span class="enar_occ_title">{{title}}</span>
    <div class="enar_occ_content">
        <div class="acc_content">
            <ul class="cat_list_widget no_numbers">
                {{each items as item index}}
                <li>
                    <a href="{{ href || 'javascript:;'}}" data-value="{{item.prop}}">{{item.name}}</a>
                </li>
                {{/each}}
            </ul>
        </div>
    </div>
</div>