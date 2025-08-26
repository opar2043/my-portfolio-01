
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pyixzidwflcesmciwtvp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5aXh6aWR3ZmxjZXNtY2l3dHZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5Njc1ODAsImV4cCI6MjA3MTU0MzU4MH0.GXaG_yLq2GlJd27eJlQHHgcU_IqkYoQ86t0OnYmXap8'
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase ;