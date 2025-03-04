import IPopover, { IPopoverContent} from './popover';
import IConfirm from './confirm';

// confirm
type RefConfirm = typeof IConfirm;
export interface ConfirmComponent extends RefConfirm {
  displayName: string;
}
const ConfirmComp: ConfirmComponent = IConfirm as ConfirmComponent;
ConfirmComp.displayName = 'ShineoutPopoverConfirm';

type RefPopover = typeof IPopover;
export interface PopoverComponent extends RefPopover {
  displayName: string;
  Confirm: ConfirmComponent;
  Content: typeof IPopoverContent;
}
const PopoverComp: PopoverComponent = IPopover as PopoverComponent;
PopoverComp.displayName = 'ShineoutPopover';
PopoverComp.Confirm = ConfirmComp;
PopoverComp.Content = IPopoverContent;

export default PopoverComp;
