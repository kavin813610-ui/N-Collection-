export type WatchCondition = 'Mint / Unworn' | 'Near Mint' | 'Excellent' | 'Very Good' | 'Vintage Patina';

export type WatchStatus = 'available' | 'reserved' | 'sold';

export type WatchCategory = 'Diver' | 'Chronograph' | 'Dress / Vintage' | 'Field & Tool' | 'Integrated Sports';

export interface Watch {
  id: string;
  reference: string;
  brand: string;
  model: string;
  price: number;
  originalRetailPrice?: number;
  year: number | string;
  category: WatchCategory;
  condition: WatchCondition;
  status: WatchStatus;
  imageUrl: string;
  additionalImages?: string[];
  caseSize: string;
  lugWidth: string;
  thickness?: string;
  movement: string;
  powerReserve?: string;
  waterResistance?: string;
  boxAndPapers: 'Full Set (Box & Papers)' | 'Box Only' | 'Papers Only' | 'Watch Only';
  summary: string;
  description: string;
  timingAccuracy?: string;
  isFeatured?: boolean;
  dateAdded: string;
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  phoneOrHandle: string;
  preferredContact: 'email' | 'instagram' | 'whatsapp' | 'sms';
  watchId?: string;
  watchTitle?: string;
  message: string;
}