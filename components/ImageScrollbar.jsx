import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex, Button } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Button
        onClick={() => {
          scrollPrev();
        }}
      >
        <Icon as={FaArrowAltCircleLeft} fontSize='2xl' cursor='pointer' />
      </Button>
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Button
        onClick={() => {
          scrollNext();
        }}
      >
        <Icon as={FaArrowAltCircleRight} fontSize='2xl' cursor='pointer' />
      </Button>
    </Flex>
  );
};

const ImageScrollBar = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    style={{ overflow: 'hidden' }}
  >
    {data.map((item) => (
      <Box key={item.id} width='910px' itemID={item.id} overflow='hidden' p='1'>
        <Image
          alt='property'
          placeholder='blur'
          blurDataURL={item.url}
          src={item.url}
          width={1000}
          height={500}
          sizes='(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px'
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollBar;
