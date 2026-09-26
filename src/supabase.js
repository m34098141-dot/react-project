import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kuaczaobtmazzuzrmzvf.supabase.co";
const supabaseKey = "sb_publishable_cyPgaxMdY7aQYQ_vcmu2-A_djsu1KnJ";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);