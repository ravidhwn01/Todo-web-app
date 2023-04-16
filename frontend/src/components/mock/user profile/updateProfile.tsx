import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Heading,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserContext } from "../../../context/usercontext";

export function UpdateUserProfile() {
  const { user, setUser } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        Update Profile
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Profile</DrawerHeader>

          <DrawerBody>
            <Input
              mt="2"
              value={user?.username}
              placeholder="Type new name..."
            />
            <Input mt="2" value={user?.email} placeholder="Type email..." />
            <Input mt="2" placeholder="Type new password..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Update</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
