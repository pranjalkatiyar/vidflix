import React from "react";
import { Container, Title, List, Item, Picture, Name } from ".styles/profiles";

export default function Profiles({childern, ...restProps}){
    return <Container {...restProps}>{childern}</Container>;
}

Profiles.Tilte = function ProfilesTitle({childern, ...restProps}){
    return <Title {...restProps}>{childern}</Title>;
};

Profiles.List = function ProfilesList({childern, ...restProps}){
    return <List {...restProps}>{childern}</List>;
};

Profiles.User = function ProfilesUser({childern, ...restProps}){
    return <Item {...restProps}>{childern}</Item>;
};

Profiles.Picture = function ProfilesPicture({childern, ...restProps}){
    return <Picture {...restProps} src={src ? '/images/users/${src}.png': '/images/misc/loading'} /> ;
};

Profiles.Name = function ProfilesName({childern, ...restProps}){
    return <Name {...restProps}>{childern}</Name>;
};