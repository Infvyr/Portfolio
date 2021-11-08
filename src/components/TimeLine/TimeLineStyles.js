import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  padding: 0;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0;
  }

  margin-bottom: 30px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`
export const CarouselMobileScrollNode = styled.li`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}
  }
`

export const CarouselItem = styled.div`
  max-width: 196px;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`

export const CarouselItemTitle = styled.span`
    margin-bottom: 8px;
    display: flex;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.02em;
    background: linear-gradient(121.57deg, ${props => props.theme.colors.headingFirstGradientColor} 18.77%, 
                ${props => props.theme.colors.accent1} 60.15%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media not all and (min-resolution:.001dpcm) {
        //@supports () {}
        display: inline-block;
    }

    @media ${props => props.theme.breakpoints.md} {
        margin-bottom: 4px;
        font-size: 20px;
        line-height: 28px;
    }
  
    @media ${props => props.theme.breakpoints.sm} {
      font-size: 16px;
      line-height: 24px;
    }
`
export const CarouselItemImg = styled.svg`
    margin-left: 21px;
    width: 100%;
    fill: ${props => props.theme.colors.svgTimeline}

    @media ${props => props.theme.breakpoints.sm} {
        -webkit-mask-image: none;
        margin-left: 16px;
        overflow: visible;
    }
    
    path {
        fill: ${props => props.theme.colors.svgTimeline}
    }

    @media not all and (min-resolution:.001dpcm) {
    //@supports () {}
      width: 110px;
    
      @media ${props => props.theme.breakpoints.sm} {
          width: 32px;
      }
    }
`

export const CarouselItemText = styled.p`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.02em;
    padding-right: 16px;

    @media ${props => props.theme.breakpoints.md} {  
        padding-right: 32px;
        font-size: 12px;
        line-height: 18px;
    }
    
    @media ${props => props.theme.breakpoints.sm} {  
        padding-right: 0;
        font-size: 10px;
        line-height: 16px;
    }
`
export const CarouselButtons = styled.div`
    width: 288px;
    display: none;
    visibility: hidden;

    @media ${props => props.theme.breakpoints.sm} {
      margin-bottom: 48px;
      display: flex;
      visibility: visible;
    }
`

export const CarouselButton = styled.button`
    box-sizing: border-box;
    background: none;
    padding: 4px;
    border: none;
    cursor: pointer;
    margin-right: 4px;
    opacity: ${(props) => props.active === props.index ? `1` : `.33`};
    transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

    &:focus {
      outline: none;
    }
`

export const CarouselButtonDot = styled.div`
    background-color: ${props => props.theme.colors.primary1};
    border-radius: 10px;
    margin: auto;
    width: 3px;
    height: 3px;
`
