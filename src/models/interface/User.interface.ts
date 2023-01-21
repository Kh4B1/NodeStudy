export interface UserAttributes {
    // 자동 주입이기에, 옵셔널
    idx?: number
    email: string
    
    // kakao, Naver 유저는 null
    password?: string
    name: string
    provider: Provider
    
    //Local 유저는 null
    providerId?: string
  }
  
  // User enum
  export enum Provider {
    LOCAL,
    KAKAO,
    NAVER,
  }