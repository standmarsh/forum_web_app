import React, { useState } from 'react';
import { Text, Box, Button, Flex,Textarea } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowBackIcon, InfoIcon } from '@chakra-ui/icons';
import { AiOutlineLike } from 'react-icons/ai';

/**
 *
 * Post Replies Schema
 * UUID, UserID, SID, Description, Title, Likes
 *
 */
export default function IndividualPost() {
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <Box width="70%" mb="8">
      <Text
        textTransform="uppercase"
        fontSize="22px"
        fontWeight="semibold"
        mb="4"
      >
        Post Topic
      </Text>

      <Box align="left" ml="2" mb="4">
        <RouterLink to="/posts">
          <Button
            bg="white"
            boxShadow="lg"
            _hover={{ background: 'white' }}
            fontSize="14px"
            pr="2"
            leftIcon={<ArrowBackIcon color="black.500" />}
          >
            Back to Posts
          </Button>
        </RouterLink>
      </Box>

      <Box
        align="left"
        bg="white"
        boxShadow="lg"
        borderRadius="lg"
        ml="2"
        mr="2"
        pb="2"
      >
        <Box p="3" pb="2">
          <Text fontSize="18px" fontWeight="semibold">
            Thread: Post Topic
          </Text>
        </Box>
        <Box pl="3" pb="3" pr="4" align="justify">
          This is where we talk about every issue you can think of no matter how
          small or complex.This is where we talk about every issue you can think
          of no matter how small or complex.This is where we talk about every
          issue you can think of no matter how small or complex.This is where we
          talk about every issue you can think of no matter how small or
          complex. This is where we talk about every issue you can think of no
          matter how small or complex.This is where we talk about every issue
          you can think of no matter how small or complex.This is where we talk
          about every issue you can think of no matter how small or complex.This
          is where we talk about every issue you can think of no matter how
          small or complex. This is where we talk about every issue you can
          think of no matter how small or complex.This is where we talk about
          every issue you can think of no matter how small or complex.This is
          where we talk about every issue you can think of no matter how small
          or complex.This is where we talk about every issue you can think of no
          matter how small or complex. This is where we talk about every issue
          you can think of no matter how small or complex.This is where we talk
          about every issue you can think of no matter how small or complex.This
          is where we talk about every issue you can think of no matter how
          small or complex.This is where we talk about every issue you can think
          of no matter how small or complex.
        </Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex pl="3" pb="2">
            <AiOutlineLike size={22} />
            <Text pl="1">20</Text>
          </Flex>
          <Flex alignItems="center" pr="3" pb="2">
            <InfoIcon />
            <Text pl="1" pr="2">
              Siddhant Mittal
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Text
        fontSize="19px"
        fontWeight="semibold"
        mb="3"
        mt="4"
        align="left"
        ml="2"
      >
        Replies &mdash; (Number of Replies)
      </Text>

      <Box
        align="left"
        bg="white"
        boxShadow="lg"
        borderRadius="lg"
        ml="2"
        mr="2"
        pt="3"
        mb="4"
      >
        <Box pl="3" pb="6" pr="4" align="justify">
          hi
        </Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex pl="3" pb="2">
            <AiOutlineLike size={17} />
            <Text fontSize="14px" pl="1">
              20
            </Text>
          </Flex>
          <Flex alignItems="center" pr="3" pb="2">
            <InfoIcon />
            <Text pl="1" pr="2">
              Siddhant Mittal
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Box bg="white" boxShadow="lg" borderRadius="lg" ml="2" mr="2" pb="2">
      <form onSubmit={handleSubmit}>
        <Box>
          <Textarea
            name="reply"
            id="reply"
            m="4"
            width="90%"
            required="required"
            placeholder="Post Reply"
          ></Textarea>
        </Box>
        <Button
          type="submit"
          bgColor="green.400"
          variant="solid"
          boxShadow="lg"
          _hover={{ background: 'green.400' }}
          color="gray.200"
          fontSize="14px"
          p="4"
        >
          SUBMIT
        </Button>
      </form>
    </Box>
    </Box>
  );
}
