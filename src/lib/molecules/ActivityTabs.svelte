<script lang="ts">
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '$components/ui/tabs';
</script>

<Tabs value="connections" class="w-full">
  <TabsList class="w-full">
    <TabsTrigger value="connections" class="w-full">Connections</TabsTrigger>
    <TabsTrigger value="history" class="w-full">History</TabsTrigger>
  </TabsList>
  <TabsContent value="connections">
    <slot name="connections" />
  </TabsContent>
  <TabsContent value="history">
    <slot name="history" />
  </TabsContent>
</Tabs>
