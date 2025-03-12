import { Dialog, DialogPanel } from '@headlessui/react';
import { Cross1Icon, GlobeIcon } from '@radix-ui/react-icons';
import { NavigationLinks, NavigationItem } from '@/components/NavigationLinks';

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  navigation: NavigationItem[];
}

export default function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
  navigation,
}: MobileMenuProps) {
  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="lg:hidden"
    >
      <div className="fixed inset-0 z-50" />
      <DialogPanel
        transition
        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-sidebar px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 duration-300 ease-out data-[closed]:opacity-0 md:data-[closed]:translate-x-1"
      >
        <div className="flex items-center justify-between">
          <div className="sm:opacity-0">
            <a
              href="/"
              className="-mx-3 px-3 py-2 text-base/7 font-semibold flex items-center gap-2"
            >
              <GlobeIcon aria-hidden="true" className="size-6" />
              ojhstill
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 p-2 cursor-pointer"
          >
            <span className="sr-only">Close menu</span>
            <Cross1Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <NavigationLinks
              navigation={navigation}
              className="space-y-2 py-6"
            />
            <div className="space-y-2 py-6">
              <a
                href="mailto:oliver@ojhstill.com"
                className="-mx-3 flex rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-sidebar-accent"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
