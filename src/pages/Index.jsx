import React from "react";
import { Box, VStack, HStack, Icon, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Spacer } from "@chakra-ui/react";
import { FaCloud, FaUser, FaCommentAlt, FaBell, FaCog, FaQuestionCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Flex h="100vh">
      {/* Left Section */}
      <Box bg="black" w="300px">
        {/* Sidebar */}
        <VStack spacing={8} p={4} align="left">
          <Icon as={FaCloud} color="teal.300" boxSize={8} />
          <VStack spacing={4} align="left">
            <Icon as={FaUser} color="white" boxSize={5} />
            <Icon as={FaCommentAlt} color="white" boxSize={5} />
            <Icon as={FaBell} color="white" boxSize={5} />
            <Icon as={FaCog} color="white" boxSize={5} />
          </VStack>
          <Spacer />
          <Icon as={FaQuestionCircle} color="white" boxSize={5} />
        </VStack>

        {/* Main Area */}
        <Box p={4} color="white">
          <Text>$ _</Text>
        </Box>
      </Box>

      {/* Right Section */}
      <Box flex={1} bg="gray.900">
        {/* Tabs */}
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab color="gray.400">Shell</Tab>
            <Tab color="gray.400" _selected={{ color: "white", bg: "gray.700" }}>
              Browser
            </Tab>
            <Tab color="gray.400">Editor</Tab>
            <Tab color="gray.400">Planner</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* Browser Content */}
              <HStack spacing={4}>
                <Box flex={1} color="white">
                  <Text>$ _</Text>
                </Box>
                <Box flex={1}>
                  <Box bg="blue.200" p={4} borderRadius="md">
                    <Text>Devin is waiting to start up... Hey Devin, I'd like for you to benchmark Llama 2 on three different provide[...]</Text>
                  </Box>
                </Box>
              </HStack>
              <Flex justify="flex-end" mt={4}>
                <Text color="white" mr={2}>
                  00
                </Text>
                <Text color="white" mr={2}>
                  K
                </Text>
                <Text color="green.500">Live</Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Index;
