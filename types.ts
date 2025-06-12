
import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  altText: string;
}

export type SocialIconId = 'facebook' | 'instagram' | 'twitter';

export interface SocialLinkInfo {
  name: string;
  url: string;
  iconId: SocialIconId;
}
