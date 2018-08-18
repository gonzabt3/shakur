<template>
    <div >
        <topbar></topbar>
        <b-row >
            <b-col cols="3">
                <settings-wall></settings-wall>
            </b-col>
            <b-col cols="5">
                <post-new></post-new>
                <post-user></post-user>
            </b-col>
            <b-col>
                <events-wall class="form-group"></events-wall>
                <doc-wall></doc-wall>
            </b-col>
        </b-row>
    </div>
</template>

<script>

import Topbar from '@/components/Topbar';
import PostUser from '@/components/PostUser';
import EventsWall from '@/components/EventsWall';
import DocWall from '@/components/DocWall';
import SettingsWall from '@/components/SettingsWall';
import PostNew from '@/components/PostNew';

export default {
  name: 'Main',
  components: { Topbar, PostUser, EventsWall, DocWall, SettingsWall, PostNew },
};
</script>

<style>

</style>
