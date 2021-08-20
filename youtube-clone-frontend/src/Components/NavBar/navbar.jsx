import React from "react";
import { Menu, Segment } from 'semantic-ui-react'

function NavBar () {
    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item
                name='home'
                />
            </Menu>
        </Segment>
    )
}
export default NavBar;