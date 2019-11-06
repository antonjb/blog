interface FluidImage {
  base64: string;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface ChildImageSharp {
  fluid: FluidImage;
}

export interface FeaturedImage {
  childImageSharp: {
    fluid: FluidImage;
  };
}
