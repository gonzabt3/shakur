<template>
    <div>
        <topbar></topbar>
        <b-row>
            <b-col>
                <settings-wall></settings-wall>
            </b-col>
            <b-col cols="5">
                <post-user></post-user>
            </b-col>
            <b-col>
                <events-wall></events-wall>
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

export default {
  name: 'Main',
  components: { Topbar, PostUser, EventsWall, DocWall, SettingsWall },
};
</script>

<style>

</style>
