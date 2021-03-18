<template>
  <div>
    <v-card style="margin-bottom: 20px">
      <v-container>
        <v-subheader>팔로잉</v-subheader>
        <v-list>
          <v-list-item v-for="(item, index) in followerItems" :key="index">
            <span>{{ item }}</span>
            <v-icon @click="removeFollow(index)">mdi-minus-circle-outline</v-icon>
          </v-list-item>
        </v-list>
      </v-container>
    </v-card>
    <v-card style="margin-bottom: 20px">
      <v-container>
        <v-subheader>팔로워</v-subheader>
        <v-list>
          <v-list-item v-for="(item, index) in followingItems" :key="index">
          <span>{{ item }}</span>
          <v-icon @click="removeFollowing(index)">mdi-minus-circle-outline</v-icon>
        </v-list-item>
      </v-list>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      followerItems : this.$store.state.users.followerList,
      followingItems : this.$store.state.users.followingList
    }
  },
  methods: {
    removeFollow(index) {
      this.$store.dispatch('users/actionRemoveFollower', {
        id: index
      })
    },
    removeFollowing(index) {
      this.$store.dispatch('users/actionRemoveFollowing', {
        id: index
      })
    }
  }
};
</script>

<style>
</style>