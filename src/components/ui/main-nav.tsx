"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type MenuDrawerProps = {};

const MenuDrawer = (props: MenuDrawerProps) => {
  return (
    <div className="relative">
      <Drawer direction="left">
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className="h-full w-[400px] rounded-t-none">
          <DrawerHeader>
            <DrawerClose>
              <button>Close</button>
            </DrawerClose>
           <div className="flex gap-2 hover:bg-blue-50 hover:text-blue-500 pl-10 py-2">
            <p>Icon</p>
            <p>Title ABCDEFG</p>
           </div>
           <div className="flex gap-2 hover:bg-blue-50 hover:text-blue-500 pl-10 py-2">
            <p>Icon</p>
            <p>Title ABCDEFG</p>
           </div>
           <div className="flex gap-2 hover:bg-blue-50 hover:text-blue-500 pl-10 py-2">
            <p>Icon</p>
            <p>Title ABCDEFG</p>
           </div>
           <div className="flex gap-2 hover:bg-blue-50 hover:text-blue-500 pl-10 py-2">
            <p>Icon</p>
            <p>Title ABCDEFG</p>
           </div>
           <div className="flex gap-2 hover:bg-blue-50 hover:text-blue-500 pl-10 py-2">
            <p>Icon</p>
            <p>Title ABCDEFG</p>
           </div>
           <div className="flex gap-2 hover:bg-blue-50 hover:text-blue-500 pl-10 py-2">
            <p>Icon</p>
            <p>Title ABCDEFG</p>
           </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
