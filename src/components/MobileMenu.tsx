import { Dialog, DialogPanel } from '@headlessui/react';
import { Cross1Icon } from '@radix-ui/react-icons';

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  navigation: { name: string; href: string; icon: React.ReactNode }[];
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
          <a href="/" className="-m-1.5 p-1.5">
            <span>ojhstill</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 p-2.5 cursor-pointer"
          >
            <span className="sr-only">Close menu</span>
            <Cross1Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-sidebar-accent flex items-center gap-2"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="/contact"
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
