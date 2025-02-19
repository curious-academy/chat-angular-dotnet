using Microsoft.AspNetCore.SignalR;

namespace back_end.Hubs
{
    public class ChatHub : Hub
    {
        #region Public methods
        public async Task NewMessage(string user, string message)
        {
            await this.Clients.All.SendAsync("messageReceived", user, message);
        }
        #endregion
    }
}
