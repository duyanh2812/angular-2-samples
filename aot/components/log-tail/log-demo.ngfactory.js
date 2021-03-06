import * as import0 from '../../../components/log-tail/log-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '../../../components/log-tail/store';
import * as import5 from '../../../components/log-tail/log-tail-service';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import14 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import15 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import16 from '../../node_modules/@angular/forms/src/directives/number_value_accessor.ngfactory';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from '@angular/common/src/pipes/async_pipe';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import22 from '@angular/forms/src/directives/default_value_accessor';
import * as import23 from '@angular/forms/src/directives/control_value_accessor';
import * as import24 from '@angular/forms/src/directives/ng_model';
import * as import25 from '@angular/forms/src/directives/ng_control';
import * as import26 from '@angular/forms/src/directives/ng_control_status';
import * as import27 from '@angular/forms/src/directives/number_value_accessor';
import * as import28 from '@angular/common/src/directives/ng_for';
export class Wrapper_LogDemo {
    constructor(p0, p1) {
        this.changed = false;
        this.context = new import0.LogDemo(p0, p1);
    }
    detectChangesInInputProps(view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    }
    detectChangesInHostProps(view, el, throwOnChange) {
    }
}
var renderType_LogDemo_Host = null;
class _View_LogDemo_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_LogDemo_Host0, renderType_LogDemo_Host, import8.ViewType.HOST, viewUtils, parentInjector, declarationEl, import9.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import6.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import6.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_LogDemo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Store_0_4 = new import4.Store();
        this._LogTailService_0_5 = new import5.LogTailService(this.parentInjector.get(import10.Http));
        this._LogDemo_0_6 = new Wrapper_LogDemo(this._Store_0_4, this._LogTailService_0_5);
        this._appEl_0.initComponent(this._LogDemo_0_6.context, [], compView_0);
        compView_0.create(this._LogDemo_0_6.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import4.Store) && (0 === requestNodeIndex))) {
            return this._Store_0_4;
        }
        if (((token === import5.LogTailService) && (0 === requestNodeIndex))) {
            return this._LogTailService_0_5;
        }
        if (((token === import0.LogDemo) && (0 === requestNodeIndex))) {
            return this._LogDemo_0_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._LogDemo_0_6.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._LogDemo_0_6.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_LogDemo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LogDemo_Host === null)) {
        (renderType_LogDemo_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_LogDemo_Host0(viewUtils, parentInjector, declarationEl);
}
export const LogDemoNgFactory = new import12.ComponentFactory('ng-component', viewFactory_LogDemo_Host0, import0.LogDemo);
const styles_LogDemo = [];
var renderType_LogDemo = null;
class _View_LogDemo0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_LogDemo0, renderType_LogDemo, import8.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import9.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import6.createRenderElement(this.renderer, parentRenderNode, 'div', import6.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import6.createRenderElement(this.renderer, this._el_0, 'h1', import6.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Error log state managed using Redux', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_5 = import6.createRenderElement(this.renderer, this._el_0, 'button', new import6.InlineArray2(2, 'style', 'margin-bottom: 10px;'), null);
        this._text_6 = this.renderer.createText(this._el_5, 'Add new log entry', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_8 = import6.createRenderElement(this.renderer, this._el_0, 'input', new import6.InlineArray4(4, 'placeholder', 'message', 'type', 'text'), null);
        this._DefaultValueAccessor_8_3 = new import13.Wrapper_DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_8));
        this._NG_VALUE_ACCESSOR_8_4 = [this._DefaultValueAccessor_8_3.context];
        this._NgModel_8_5 = new import14.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_8_4);
        this._NgControl_8_6 = this._NgModel_8_5.context;
        this._NgControlStatus_8_7 = new import15.Wrapper_NgControlStatus(this._NgControl_8_6);
        this._text_9 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_10 = import6.createRenderElement(this.renderer, this._el_0, 'input', new import6.InlineArray4(4, 'placeholder', 'severity', 'type', 'number'), null);
        this._DefaultValueAccessor_10_3 = new import13.Wrapper_DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_10));
        this._NumberValueAccessor_10_4 = new import16.Wrapper_NumberValueAccessor(this.renderer, new import19.ElementRef(this._el_10));
        this._NG_VALUE_ACCESSOR_10_5 = [
            this._DefaultValueAccessor_10_3.context,
            this._NumberValueAccessor_10_4.context
        ];
        this._NgModel_10_6 = new import14.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_10_5);
        this._NgControl_10_7 = this._NgModel_10_6.context;
        this._NgControlStatus_10_8 = new import15.Wrapper_NgControlStatus(this._NgControl_10_7);
        this._text_11 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_12 = import6.createRenderElement(this.renderer, this._el_0, 'table', new import6.InlineArray2(2, 'class', 'table'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                     ', null);
        this._el_14 = import6.createRenderElement(this.renderer, this._el_12, 'tbody', import6.EMPTY_INLINE_ARRAY, null);
        this._el_15 = import6.createRenderElement(this.renderer, this._el_14, 'tr', import6.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                        ', null);
        this._el_17 = import6.createRenderElement(this.renderer, this._el_15, 'td', import6.EMPTY_INLINE_ARRAY, null);
        this._el_18 = import6.createRenderElement(this.renderer, this._el_17, 'strong', import6.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, 'Message', null);
        this._el_20 = import6.createRenderElement(this.renderer, this._el_15, 'td', import6.EMPTY_INLINE_ARRAY, null);
        this._el_21 = import6.createRenderElement(this.renderer, this._el_20, 'strong', import6.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, 'Severity', null);
        this._text_23 = this.renderer.createText(this._el_15, '\n                     ', null);
        this._text_24 = this.renderer.createText(this._el_14, '\n                     ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_14, null);
        this._appEl_25 = new import3.AppElement(25, 14, this, this._anchor_25);
        this._TemplateRef_25_5 = new import20.TemplateRef_(this._appEl_25, viewFactory_LogDemo1);
        this._NgFor_25_6 = new import17.Wrapper_NgFor(this._appEl_25.vcRef, this._TemplateRef_25_5, this.parentInjector.get(import21.IterableDiffers), this.ref);
        this._text_26 = this.renderer.createText(this._el_14, '\n                ', null);
        this._text_27 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_28 = import6.createRenderElement(this.renderer, this._el_0, 'h4', import6.EMPTY_INLINE_ARRAY, null);
        this._el_29 = import6.createRenderElement(this.renderer, this._el_28, 'a', new import6.InlineArray2(2, 'href', 'http://www.syntaxsuccess.com/viewarticle/redux-in-angular-2.0'), null);
        this._text_30 = this.renderer.createText(this._el_29, 'Read more here', null);
        this._text_31 = this.renderer.createText(this._el_0, '\n              ', null);
        var disposable_0 = this.renderer.listen(this._el_5, 'click', this.eventHandler(this._handle_click_5_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_8, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_8_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_8, 'input', this.eventHandler(this._handle_input_8_1.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_8, 'blur', this.eventHandler(this._handle_blur_8_2.bind(this)));
        const subscription_0 = this._NgModel_8_5.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_8_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_10, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_10_0.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_10, 'input', this.eventHandler(this._handle_input_10_1.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_10, 'blur', this.eventHandler(this._handle_blur_10_2.bind(this)));
        var disposable_7 = this.renderer.listen(this._el_10, 'change', this.eventHandler(this._handle_change_10_3.bind(this)));
        const subscription_1 = this._NgModel_10_6.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_10_0.bind(this)));
        this._pipe_async_0 = new import18.AsyncPipe(this.ref);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._el_29,
            this._text_30,
            this._text_31
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7
        ], [
            subscription_0,
            subscription_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import22.DefaultValueAccessor) && (8 === requestNodeIndex))) {
            return this._DefaultValueAccessor_8_3.context;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && (8 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_8_4;
        }
        if (((token === import24.NgModel) && (8 === requestNodeIndex))) {
            return this._NgModel_8_5.context;
        }
        if (((token === import25.NgControl) && (8 === requestNodeIndex))) {
            return this._NgControl_8_6;
        }
        if (((token === import26.NgControlStatus) && (8 === requestNodeIndex))) {
            return this._NgControlStatus_8_7.context;
        }
        if (((token === import22.DefaultValueAccessor) && (10 === requestNodeIndex))) {
            return this._DefaultValueAccessor_10_3.context;
        }
        if (((token === import27.NumberValueAccessor) && (10 === requestNodeIndex))) {
            return this._NumberValueAccessor_10_4.context;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_10_5;
        }
        if (((token === import24.NgModel) && (10 === requestNodeIndex))) {
            return this._NgModel_10_6.context;
        }
        if (((token === import25.NgControl) && (10 === requestNodeIndex))) {
            return this._NgControl_10_7;
        }
        if (((token === import26.NgControlStatus) && (10 === requestNodeIndex))) {
            return this._NgControlStatus_10_8.context;
        }
        if (((token === import20.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import28.NgFor) && (25 === requestNodeIndex))) {
            return this._NgFor_25_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const valUnwrapper = new import9.ValueUnwrapper();
        this._DefaultValueAccessor_8_3.detectChangesInInputProps(this, this._el_8, throwOnChange);
        const currVal_8_1_0 = this.context.msg;
        this._NgModel_8_5.check_model(currVal_8_1_0, throwOnChange, false);
        this._NgModel_8_5.detectChangesInInputProps(this, this._el_8, throwOnChange);
        this._NgControlStatus_8_7.detectChangesInInputProps(this, this._el_8, throwOnChange);
        this._DefaultValueAccessor_10_3.detectChangesInInputProps(this, this._el_10, throwOnChange);
        this._NumberValueAccessor_10_4.detectChangesInInputProps(this, this._el_10, throwOnChange);
        const currVal_10_2_0 = this.context.severity;
        this._NgModel_10_6.check_model(currVal_10_2_0, throwOnChange, false);
        this._NgModel_10_6.detectChangesInInputProps(this, this._el_10, throwOnChange);
        this._NgControlStatus_10_8.detectChangesInInputProps(this, this._el_10, throwOnChange);
        valUnwrapper.reset();
        const currVal_25_0_0 = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.store.logEntries));
        this._NgFor_25_6.check_ngForOf(currVal_25_0_0, throwOnChange, valUnwrapper.hasWrappedValue);
        this._NgFor_25_6.detectChangesInInputProps(this, this._anchor_25, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._DefaultValueAccessor_8_3.detectChangesInHostProps(this, this._el_8, throwOnChange);
        this._NgModel_8_5.detectChangesInHostProps(this, this._el_8, throwOnChange);
        this._NgControlStatus_8_7.detectChangesInHostProps(this, this._el_8, throwOnChange);
        this._DefaultValueAccessor_10_3.detectChangesInHostProps(this, this._el_10, throwOnChange);
        this._NumberValueAccessor_10_4.detectChangesInHostProps(this, this._el_10, throwOnChange);
        this._NgModel_10_6.detectChangesInHostProps(this, this._el_10, throwOnChange);
        this._NgControlStatus_10_8.detectChangesInHostProps(this, this._el_10, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._NgModel_8_5.context.ngOnDestroy();
        this._NgModel_10_6.context.ngOnDestroy();
        this._pipe_async_0.ngOnDestroy();
    }
    _handle_click_5_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_5_0 = (this.context.generateLogEntry() !== false);
        return (true && pd_5_0);
    }
    _handle_ngModelChange_8_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_8_0 = ((this.context.msg = $event) !== false);
        return (true && pd_8_0);
    }
    _handle_input_8_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_8_0 = (this._DefaultValueAccessor_8_3.context.onChange($event.target.value) !== false);
        return (true && pd_8_0);
    }
    _handle_blur_8_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_8_0 = (this._DefaultValueAccessor_8_3.context.onTouched() !== false);
        return (true && pd_8_0);
    }
    _handle_ngModelChange_10_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_10_0 = ((this.context.severity = $event) !== false);
        return (true && pd_10_0);
    }
    _handle_input_10_1($event) {
        this.markPathToRootAsCheckOnce();
        const pd_10_0 = (this._DefaultValueAccessor_10_3.context.onChange($event.target.value) !== false);
        const pd_10_1 = (this._NumberValueAccessor_10_4.context.onChange($event.target.value) !== false);
        return ((true && pd_10_0) && pd_10_1);
    }
    _handle_blur_10_2($event) {
        this.markPathToRootAsCheckOnce();
        const pd_10_0 = (this._DefaultValueAccessor_10_3.context.onTouched() !== false);
        const pd_10_1 = (this._NumberValueAccessor_10_4.context.onTouched() !== false);
        return ((true && pd_10_0) && pd_10_1);
    }
    _handle_change_10_3($event) {
        this.markPathToRootAsCheckOnce();
        const pd_10_0 = (this._NumberValueAccessor_10_4.context.onChange($event.target.value) !== false);
        return (true && pd_10_0);
    }
}
export function viewFactory_LogDemo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LogDemo === null)) {
        (renderType_LogDemo = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_LogDemo, {}));
    }
    return new _View_LogDemo0(viewUtils, parentInjector, declarationEl);
}
class _View_LogDemo1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_LogDemo1, renderType_LogDemo, import8.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import9.ChangeDetectorStatus.CheckAlways);
        this._expr_8 = import9.UNINITIALIZED;
        this._expr_9 = import9.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import6.createRenderElement(this.renderer, null, 'tr', import6.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import6.createRenderElement(this.renderer, this._el_0, 'td', import6.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_5 = import6.createRenderElement(this.renderer, this._el_0, 'td', import6.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n                     ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_8 = import6.interpolate(1, '', this.context.$implicit.text, '');
        if (import6.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_3, currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = import6.interpolate(1, '', this.context.$implicit.severity, '');
        if (import6.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_6, currVal_9);
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_LogDemo1(viewUtils, parentInjector, declarationEl) {
    return new _View_LogDemo1(viewUtils, parentInjector, declarationEl);
}
